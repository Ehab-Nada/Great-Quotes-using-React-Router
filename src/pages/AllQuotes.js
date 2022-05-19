import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Ehab",
    text: "React is Fun",
  },
  {
    id: "q2",
    author: "Ehab Nada",
    text: "React is great",
  },
];
const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};
export default AllQuotes;
