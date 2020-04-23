import performanceOwnReact from "../utils/performanceOwnReact";
import shallowEqual from "../utils/shallowEqual";

/* eslint-disable no-param-reassign */
const isEvent = name => name.startsWith("on");
const isAttribute = name => !isEvent(name) && name !== "children";

const updateDomProperties = (dom, prevProps, nextProps) => {
  if (shallowEqual(prevProps, nextProps)) {
    performanceOwnReact.statistics.wrongRenderCounter += 1;
  }
  // Удаляем прослушку событий
  Object.keys(prevProps)
    .filter(isEvent)
    .forEach(name => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
  // Удаляем пропсы
  Object.keys(prevProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = null;
    });
  // Задаём пропсы
  Object.keys(nextProps)
    .filter(isAttribute)
    .forEach(name => {
      dom[name] = nextProps[name];
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
