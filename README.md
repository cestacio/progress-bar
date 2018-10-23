This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## A Simple Progress Bar Built with React

- There are two main components that make up this bar: `ProgressBar` and `Status`.
  - `ProgressBar` is the parent div that holds the progress percentage.
  - `Status` is the div that represents the current progress, which fills the parent div. This component will fill up a percentage of the container.

## Notes

- Currently the progress bar is updated in increments of 10% with the click of a button. Once the status reaches 100%, it will reset the progress bar back to 0%.
- If I had more time, I would replace the button by creating a method using `setInterval` to increment the progress bar by 10% automatically at each second

## Getting Started Locally

- Fork this repo
- `npm install`
- `npm start`
