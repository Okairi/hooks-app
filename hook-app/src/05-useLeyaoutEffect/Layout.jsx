import { useCounter, useFetch } from "../hooks";
import { Loading, Blockquote } from "../03-example";

export const Layout = () => {
  const { counter, increment } = useCounter(1);

  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking bad quote</h1>

      <hr />

      {isLoading ? <Loading /> : <Blockquote quote={quote} author={author} />}

      <button className="btn btn-primary" onClick={() => increment()}>
        Next code
      </button>
    </>
  );
};
