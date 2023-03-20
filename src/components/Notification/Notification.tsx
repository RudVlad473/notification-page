import classNames from "classnames"
import React, { FC } from "react"

import MessageNotification from "../MessageNotification/MessageNotification"
import { NotificationType } from "../NotificationsList/NotificationsList"
import PictureNotification from "../PictureNotification/PictureNotification"
import ReactionNotification from "../ReactionNotification/ReactionNotification"

function getNotificationTypeComponent(
  notification: NotificationType
): React.ReactNode {
  switch (notification.type) {
    case "reacted to your recent post": {
      return <ReactionNotification {...notification} />
    }
    case "has joined your group": {
      return <ReactionNotification {...notification} />
    }
    case "left the group": {
      return <ReactionNotification {...notification} />
    }
    case "commented on your picture": {
      return <PictureNotification {...notification} />
    }
    case "sent you a private message": {
      return <MessageNotification {...notification} />
    }
    case "followed you": {
      return <ReactionNotification {...notification} />
    }
    default: {
      return <ReactionNotification {...notification} />
    }
  }
}

const Notification: FC<NotificationType> = (props) => {
  return <>{getNotificationTypeComponent(props)}</>
}

export default Notification
