import performanceOwnReact from "../utils/performanceOwnReact";

/* eslint-disable no-param-reassign */
const isEvent = name => name.startsWith("on");
const isAttribute = name => !isEvent(name) && name !== "children";

const updateDomProperties = (dom, prevProps, nextProps) => {
  // Задаем пропсы обновившимся элементам
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(name => {
      if (prevProps[name] !== nextProps[name]) {
        dom[name] = nextProps[name];
      } else {
        performanceOwnReact.statistics.wrongRenderCounter += 1;
      }
    });

  // Удаляем прослушку событий обновившимся элементам
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Добавляем прослушку событий
  Object.keys(nextProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
};
export default updateDomProperties;
