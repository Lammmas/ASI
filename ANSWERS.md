## Questions

- How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

In total I spent about 6 hours, but couple of hours was spent on trying to get my webhost admit node.js, which required SSH access, which was an issue on its own.
I would improve UX with proper switching of the "Search" button into "Loading..." status, which I forgot about initially. Additionally, would add caching so it would not hit the backend at every request

- Please describe yourself using JSON.
```json
{
    "age": "25",
    "nickname": "Alice",
    "chocolate eaten": "uncountable",
    "Nova Rocks visited": "3",
    "top games": {"Skyrim": "253", "Assassin's 'Creed": "150", "Saints Row": "80"},
    "years coded": "8"
}
```

- How would you improve the application's performance?

As mentioned before, would add caching, and would download the CSS and package it together, with all the minifying and uglifying.