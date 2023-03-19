import classNames from "classnames"
import { FC } from "react"

import { getPictureByName } from "../../utils/getPictureByName"
import { NotificationType } from "../NotificationsList/NotificationsList"
import styles from "./ReactionNotification.module.scss"

const ReactionNotification: FC<NotificationType> = ({
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
        <span className={"type"}>{type}</span>{" "}
        <span className={"content"}>
          {content} {!isRead && <span className={"middot"}>&middot;</span>}
        </span>
      </div>

      <span className={"created-at"}>{createdAt}</span>
    </div>
  )
}

export default ReactionNotification
