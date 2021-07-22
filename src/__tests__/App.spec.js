import React from "react";
import { act } from "react-dom/test-utils";
import { render, cleanup } from "@testing-library/react";
import App from "../App";
import { storyIds, singularStory } from "../fixtures";

import { getStory, getStoryIds } from "../services/HNAPI";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

beforeEach(cleanup);
