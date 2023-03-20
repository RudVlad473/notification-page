import classNames from "classnames"
import { FC } from "react"

import { getPictureByName } from "../../utils/getPictureByName"
import { NotificationType } from "../NotificationsList/NotificationsList"
import Middot from "../UI/Middot/Middot"
import styles from "./PictureNotification.module.scss"

const PictureNotification: FC<NotificationType> = ({
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

      <div className={classNames("details", styles["details"])}>
        <span className={classNames("author", styles["author"])}>{author}</span>{" "}
        <span className={"type"}>
          {type} {!isRead && <Middot />}
        </span>{" "}
        <span className={classNames("content", styles["content"])}></span>
      </div>

      <div className={styles["content"]}>
        <img src={getPictureByName(content as string)} alt="content" />
      </div>
      <span className={classNames("created-at", styles["created-at"])}>
        {createdAt}
      </span>
    </div>
  )
}

export default PictureNotification
