export default function Copyright() {
  let currentYear = new Date().getFullYear();
  return (
    <>
      <p>&copy; {currentYear}</p>
      <style jsx>
        {`
          p {
            font-size: 0.75rem;
            text-align: center;
          }
        `}
      </style>
    </>
  );
}
