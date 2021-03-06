// Задание первого уровня 1
// В функцию приходит массив состояний заказа и фильтруется
// Нужно заменить FIXME на тип который вычисляется на освове OrderState

type FIXME = Array<"initial" | "inWork">;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "inWork",
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME;
  orderStates.forEach((element) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};
