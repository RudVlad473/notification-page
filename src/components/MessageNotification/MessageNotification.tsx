import classNames from "classnames"
import { FC } from "react"

import { getPictureByName } from "../../utils/getPictureByName"
import { NotificationType } from "../NotificationsList/NotificationsList"
import styles from "./MessageNotification.module.scss"

const MessageNotification: FC<NotificationType> = ({
  author,
  type,
  content,
  createdAt,

  isRead,
}) => {
  return (
    <div
      className={classNames("notification", styles["notification"], {
        featured: !isRead,
      })}>
      <div className={"avatar"}>
        <img
          src={getPictureByName(
            `avatar-${author.toLowerCase().replace(" ", "-")}`
          )}
          alt="avatar"
        />
      </div>

      <div className={"details"}>
        <span className={"author"}>{author}</span>{" "}
        <span>
          <span className={"type"}>{type}</span>
          {!isRead && <span className={"middot"}>&middot;</span>}{" "}
        </span>
      </div>
      <span className={"created-at"}>{createdAt}</span>

      <article className={classNames("content", styles["message"])}>
        {content}
      </article>
    </div>
  )
}

export default MessageNotification
