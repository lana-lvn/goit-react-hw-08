import "cally";

const HomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Welcome to Phonebook!</h1>
      <div className="flex gap-5">
        <p className="text-xl text-right">Today is...</p>
        <calendar-date class="cally bg-base-100 border border-base-300 shadow-lg rounded-box">
          <svg
            aria-label="Previous"
            className="size-4"
            slot="previous"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
          </svg>
          <svg
            aria-label="Next"
            className="size-4"
            slot="next"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
          </svg>
          <calendar-month></calendar-month>
        </calendar-date>
        <p className="text-xl text-left self-end">
          ...a good day to call somebody!
        </p>
      </div>
    </div>
  );
};
export default HomePage;
