import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
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
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <NoQuotesFound />;
  }
  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${quote.id}`} exact>
        <div className="centered">
          <Link className="btn--flat" to={`/quotes/${quote.id}/comments`}>
            Load comments
          </Link>
        </div>
      </Route>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </section>
  );
};
export default QuoteDetail;
