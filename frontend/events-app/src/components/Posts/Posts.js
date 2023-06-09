import "./posts.css";

export default function Posts() {
  return (
    <section id="post">
      <p className="info">
        Whether organizing a small meeting or orchestrating a large conference,
        event planning is a huge task! Every event, no matter how simple or
        complex, requires detailed planning and organization.
      </p>

      <div className="container post__container">
        <div className="post__cards">
          <article className="post__card">
            <img
              className="img1"
              src="https://webstockreview.net/images/lock-clipart-fancy-11.png"
              alt=""
            ></img>

            <h3>Create account</h3>
            <p>A quick and easy process to access all the features.</p>
          </article>
          <article className="post__card">
            <img
              className="img2"
              src="https://o.remove.bg/downloads/d0527f7f-654c-4f68-8289-bccd58e1365f/th-removebg-preview.png"
              alt=""
            ></img>

            <h3>Create events</h3>
            <p>Easily Track & Plan Your Events.</p>
          </article>
          <article className="post__card">
            <img
              className="img3"
              src="http://clipart-library.com/img/1838041.png"
              alt=""
            ></img>
            <h3>Book events</h3>
            <p>Event registration available to anyone with your link.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
