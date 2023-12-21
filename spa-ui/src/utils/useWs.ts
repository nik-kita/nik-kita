import { useEffect, useRef, useState } from "react";
import { genUseWs } from "sugar_ws/react.js";

export const useWs = genUseWs({ useEffect, useRef, useState });
