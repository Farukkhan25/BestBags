import React from 'react';
import { Link } from 'react-router-dom';
// import useTitle from '../../hooks/useTitle';

const Blog = () => {
    // useTitle('Blog');
    return (
      <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Blogs</h2>
            <p className="font-serif text-sm dark:text-gray-400">
              Let's learn about some important topics.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
            <article className="flex flex-col dark:bg-gray-900 bg-gray-700">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://cdn.educba.com/academy/wp-content/uploads/2021/02/React-State-Management.jpg"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  className="text-lg tracking-wider uppercase hover:underline dark:text-violet-400 text-violet-400"
                >
                  What are the different ways to manage a state in a React
                  application?
                </Link>
                <h3 className="flex-1 py-2 text-md text-justify font-semibold leading-snug text-slate-300">
                  React applications are vertically scalable, while NoSQL databases
                  are horizontally scalable. SQL databases are table-based,
                  while NoSQL databases are document, key-value, graph, or
                  wide-column stores. SQL databases are better for multi-row
                  transactions, while NoSQL is better for unstructured data like
                  documents or JSON. In almost all situations SQL databases are
                  vertically scalable. This means that you can increase the load
                  on a single server by increasing things like RAM, CPU or SSD.
                  But on the other hand NoSQL databases are horizontally
                  scalable. This means that you handle more traffic by sharding,
                  or adding more servers in your NoSQL database. It is similar
                  to adding more floors to the same building versus adding more
                  buildings to the neighborhood. Thus NoSQL can ultimately
                  become larger and more powerful, making these databases the
                  preferred choice for large or ever-changing data sets.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>November 28, 2022</span>
                  <span>2.1K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900 bg-gray-700">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://dmitripavlutin.com/javascript-prototypal-inheritance/cover.png"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  className="text-lg tracking-wider uppercase hover:underline dark:text-violet-400 text-violet-400 "
                >
                  How does prototypical inheritance work?
                </Link>
                <h3 className="flex-1 py-2 text-md text-justify font-semibold leading-snug text-slate-300">
                  Proto typing is very important. It is an open standard used to share
                  security information between two parties — a client and a
                  server. Each JWT contains encoded JSON objects, including a
                  set of claims. JWTs are signed using a cryptographic algorithm
                  to ensure that the claims cannot be altered after the token is
                  issued. JWTs differ from other web tokens in that they contain
                  a set of claims. Claims are used to transmit information
                  between two parties. What these claims are depends on the use
                  case at hand. For example, a claim may assert who issued the
                  token, how long it is valid for, or what permissions the
                  client has been granted. A JWT is a string made up of three
                  parts, separated by dots (.), and serialized using base64. In
                  the most common serialization format, compact serialization,
                  the JWT looks like this: xxxxx.yyyyy.zzzzz. JWTs are a good
                  way of securely transmitting information between parties.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>November 25, 2022</span>
                  <span>2.2K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900 bg-gray-700">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://anhtester.com/uploads/post/img-1000x600-1.jpg"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  className="text-lg tracking-wider uppercase hover:underline dark:text-violet-400 text-violet-400"
                >
                  What is a unit test? Why should we write unit tests?
                </Link>
                <h3 className="flex-1 py-2 text-md text-justify font-semibold leading-snug text-slate-300">
                  JavaScript is a simple programming language that can be used
                  with any browser that has the JavaScript Engine installed.
                  Node. js, on the other hand, is an interpreter or execution
                  environment for the JavaScript programming language. NodeJS is
                  a cross-platform and opensource Javascript runtime environment
                  that allows the javascript to be run on the server-side.
                  Nodejs allows Javascript code to run outside the browser.
                  Nodejs comes with a lot of modules and mostly used in web
                  development. Javascript is a Scripting language. It is mostly
                  abbreviated as JS. It can be said that Javascript is the
                  updated version of the ECMA script. Javascript is a high-level
                  programming language that uses the concept of Oops but it is
                  based on prototype inheritance. Javascript is capable enough
                  to add HTML and play with the DOM.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>November 27, 2022</span>
                  <span>2.3K views</span>
                </div>
              </div>
            </article>
            <article className="flex flex-col dark:bg-gray-900 bg-gray-700">
              <Link
                rel="noopener noreferrer"
                to="/blog"
                aria-label="Te nulla oportere reprimique his dolorum"
              >
                <img
                  alt=""
                  className="object-cover w-full h-52 dark:bg-gray-500"
                  src="https://plainenglish.io/assets/post-content/angular-vs-react-vs-vue-js-which-is-the-best-choice-for-2022.png"
                />
              </Link>
              <div className="flex flex-col flex-1 p-6">
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  aria-label="Te nulla oportere reprimique his dolorum"
                ></Link>
                <Link
                  rel="noopener noreferrer"
                  to="/blog"
                  className="text-lg tracking-wider uppercase hover:underline dark:text-violet-400 text-violet-400"
                >
                  React vs. Angular vs. Vue?
                </Link>
                <h3 className="flex-1 py-2 text-md text-justify font-semibold leading-snug text-slate-300">
              React receives multiple client requests and places them into
                  EventQueue. NodeJS is built with the concept of event-driven
                  architecture. NodeJS has its own EventLoop which is an
                  infinite loop that receives requests and processes them. Node
                  JS Platform does not follow Request/Response Multi-Threaded
                  Stateless Model. It follows Single Threaded with Event Loop
                  Model. Node JS Processing model mainly based on Javascript
                  Event based model with Javascript callback mechanism. You
                  should have some good knowledge about how Javascript events
                  and callback mechanism works. As Node JS follows this
                  architecture, it can handle more and more concurrent client
                  requests very easily. The main heart of Node JS Processing
                  model is “Event Loop”. If we understand this, then it is very
                  easy to understand the Node JS Internals.
                </h3>
                <div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                  <span>Nov 24, 2022</span>
                  <span>2.4K views</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
};

export default Blog;