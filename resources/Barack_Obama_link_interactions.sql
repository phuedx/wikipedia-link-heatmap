select

  # Identifying the page.
  wiki,
  event.namespaceIdSource as page_namespace,
  event.pageTitleSource as page_title,

  # Identifying the link.
  event.namespaceIdHover as link_namespace,
  event.pageTitleHover as link_title,

  count(*) as n
from
  event.popups
where

  # t
  year = 2017
  and month = 12
  and day = 12
  and hour >= 0 and hour < 12

  # WTF?
  and event.namespaceIdHover is not null
  and event.pageTitleHover is not null

  and event.pageTitleSource = 'Barack Obama'

group by
  wiki,
  event.namespaceIdSource,
  event.pageTitleSource,
  event.namespaceIdHover,
  event.pageTitleHover

;
