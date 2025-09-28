import { createContext, Dispatch, SetStateAction } from "react";

type CursorHoverContextType = {
  cursorHover: boolean;
  setCursorHover: Dispatch<SetStateAction<boolean>>;
};

export const cursorHoverContext = createContext<CursorHoverContextType>({
  cursorHover: false,
  setCursorHover: () => {},
});
