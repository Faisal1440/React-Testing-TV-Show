
import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';
import App from './App';
import { fetchShow as mockFetchShow } from './api/fetchShow';

jest.mock('./api/fetchShow');
console.log("mockFetchShow in App.test.js", mockFetchShow);

const episodes = {
    data: [
        {
            id: 553946,
            url: "http://www.tvmaze.com/episodes/553946/stranger-things-1x01-chapter-one-the-vanishing-of-will-byers",
            name: "Chapter One: The Vanishing of Will Byers",
            season: 1,
            number: 1,
            airdate: "2016-07-15",
            airtime: "",
            airstamp: "2016-07-15T12:00:00+00:00",
            runtime: 60,
            image: "",
            medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/67/168918.jpg",
            __proto__: Object,
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
            _links: "",
            self: {href: "http://api.tvmaze.com/episodes/553946"},
        },
    ]
}

test("App component fetches data and renders it", async () => {
    mockFetchShow.mockResolvedValueOnce(episodes)
    const { getBytext, queryAllbyTestId } = render(<App />);

    const dropdown = getBytext(/select a season/i);
    fireEvent.click(dropdown);

    getBytext(/fetching data.../i);
    await wait();
    expect(queryAllbyTestId("episodes")).toHaveLength(1);
});