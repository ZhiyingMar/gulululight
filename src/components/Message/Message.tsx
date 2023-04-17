import { ListGroup, Spinner } from "react-bootstrap";
import { getList } from "@/services/message";
import AlertBasic from "../tool/Alert";
import MessageItem from "./MessageItem";
import { useState, useEffect } from "react";
import empty from "@/assets/image/empty.png";

import useContainerScroll from "@/utils/useContainerScroll";
import eventBus from "@/utils/eventBus";

const Messages = () => {
  const [error, setError] = useState("");
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const { reachBottom, scrollToAnchor } = useContainerScroll("#todo-list");
  const pageSize = 10;

  // 获取数据列表
  const getMessage = (page?: number, isRefresh?: boolean) => {
    if (loading) return;
    setLoading(true);
    getList({
      pageIndex: page ?? pageIndex,
      pageSize,
    })
      .then((res: any) => {
        setLoading(false);
        setHasMore(res?.length >= pageSize);
        setList(list.concat(res));
        isRefresh && scrollToAnchor("new-message");
      })
      .catch((err) => {
        setLoading(false);
        setError(err?.error ?? "获取数据失败");
        setTimeout(() => {
          setError("");
        }, 2000);
      });
  };

  // 加载更多
  const uploadMore = () => {
    // 解决pageIndex更新不及时的问题
    setPageIndex((pageIndex) => {
      getMessage(pageIndex + 1);
      return pageIndex + 1;
    });
  };

  useEffect(() => {
    getMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    eventBus.on("refresh", () => {
      setPageIndex(0);
      getMessage(0, true);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (reachBottom && !loading && hasMore) {
      uploadMore();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reachBottom, loading]);

  return (
    <div id="messages">
      <ListGroup as="ul" id="todo-list">
        {list.map((value: any) => {
          return (
            <ListGroup.Item
              key={value?.id}
              as="li"
              className="d-flex justify-content-between align-items-start"
            >
              <MessageItem {...value}></MessageItem>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {loading && (
        <div className="mt-4 d-flex align-items-center justify-content-center">
          <Spinner
            animation="border"
            role="status"
            variant="secondary"
          ></Spinner>
          <span className="ms-2 fw-light">加载中。。。</span>
        </div>
      )}
      {!!list?.length && !loading && !hasMore && (
        <p className="mt-4 text-center fw-light">已经到底了。。。</p>
      )}
      {!list?.length && !loading && !hasMore && !pageIndex && (
        <div className="mt-4 d-flex flex-column align-items-center justify-content-center">
          <img
            src={empty}
            width="100"
            data-toggle="tooltip"
            data-placement="top"
            data-original-title="写留言"
            alt=""
          />
          <p className="mt-4 fs-6 ms-1 text-center fw-bolder nav-color-bg-light">空空的捏～～～</p>
        </div>
      )}

      <AlertBasic show={!!error} content={error}></AlertBasic>
    </div>
  );
};

export default Messages;
