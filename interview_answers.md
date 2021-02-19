# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?
  You are able to pass props and state around your components easier

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
actions: are use to store certain functions that are used to return certian payloads types when called
reducers: are a function and they use the actions to change the state
store: its stores the whole state of the app and is used to setup the state to be used throughout the component without prop drilling

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?
redux thunks allows use to use dispatch inside of our action creators allowing use to create a better action function

4. What is your favorite state management system you've learned and this sprint? Please explain why!

To be honest.... i really like this whole concept and feel like it is fun and kind of easy, i would like to say that when useing redux i feel like its nice thing to use from component to component, but working with context api, feel like it is easier on larger projects cause since it allows you to use state all over your components / projects. Feel like it is sometimes hard to decide but feel like context api is easier but react is more fun and allows more features. 