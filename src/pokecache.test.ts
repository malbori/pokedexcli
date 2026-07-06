import { describe, test, expect } from "vitest";
import { Cache } from "./pokecache.js";

test("stores and retrieves a value", () => {
    const cache = new Cache(1000);

    cache.add("test", "hello");

    expect(cache.get("test")).toBe("hello");

    cache.stopReapLoop();
});

test.concurrent.each([
    {
        key: "a",
        value: "apple",
        interval: 100,
    },
    {
        key: "b",
        value: "banana",
        interval: 200,
    },
])(
    "cache expires after $interval ms",
    async ({ key, value, interval }) => {

        const cache = new Cache(interval);

        cache.add(key, value);

        expect(cache.get(key)).toBe(value);

        await new Promise(resolve =>
            setTimeout(resolve, interval * 3)
        );

        expect(cache.get(key)).toBeUndefined();

        cache.stopReapLoop();
    }
);