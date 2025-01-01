enum PermissionLevel {
  READ,
  WRITE,
  DELETE,
}

const getPermissionMessage = (permissions: PermissionLevel): string => {
  switch (permissions) {
    case PermissionLevel.READ:
      return "You can read content";
    case PermissionLevel.WRITE:
      return "You can write content";
    case PermissionLevel.DELETE:
      return "You can delete content";
  }
};

console.log(getPermissionMessage(PermissionLevel.READ));

// type Rectangle = {
//   width: number;
//   height: number;
// };

// const calcArea = (rect: Rectangle): number => rect.width * rect.height;
// console.log(calcArea({ width: 5, height: 3 }));

interface Vehicle {
  name: string;
  speed: number;
  power: string;
}

interface Bike extends Vehicle {
  hasCarrier: boolean;
}

const bike: Bike = {
  name: "Sherlay",
  speed: 20,
  power: "high",
  hasCarrier: true,
};

type LoginCredentials = {
  username: string;
  password: string;
};

const userLogin = (credentials: LoginCredentials): boolean => {
  return credentials.username && credentials.password ? true : false;
};

type Circle = {
  radius: number;
};

type Rectangle = {
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calcArea = (shape: Shape): number => {
  if ("radius" in shape) {
    return Math.PI * shape.radius * shape.radius;
  } else {
    return shape.width * shape.height;
  }
};

const getItem = <T,>(arr: T[], index: number): T => {
  return arr[index];
};

getItem([1, 2, 3], 2);
getItem(["a", "b", "c"], 1);

