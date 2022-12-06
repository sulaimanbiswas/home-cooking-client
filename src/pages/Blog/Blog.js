import React from "react";

const Blog = () => {
  return (
    <div className="">
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          1. Difference between SQL and NoSQL
        </div>
        <div className="collapse-content">
          <ul className="pl-8">
            <li>
              1 SQL databases are relational, NoSQL databases are
              non-relational.
            </li>
            <li>
              2. SQL databases use structured query language and have a
              predefined schema. NoSQL databases have dynamic schemas for
              unstructured data.
            </li>
            <li>
              3. SQL databases are vertically scalable, while NoSQL databases
              are horizontally scalable.
            </li>
            <li>
              4. SQL databases are table-based, while NoSQL databases are
              document, key-value, graph, or wide-column stores.
            </li>
            <li>
              5. SQL databases are better for multi-row transactions, while
              NoSQL is better for unstructured data like documents or JSON.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          2. What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <ul className="pl-8">
            <li className="mb-3">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued.
            </li>
            <li className="mb-3">
              JWTs differ from other web tokens in that they contain a set of
              claims. Claims are used to transmit information between two
              parties. What these claims are depends on the use case at hand.
              For example, a claim may assert who issued the token, how long it
              is valid for, or what permissions the client has been granted.
            </li>
            <li className="mb-3">
              A JWT is a string made up of three parts, separated by dots (.),
              and serialized using base64. In the most common serialization
              format, compact serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.
            </li>
            <li className="mb-3">
              Once decoded, you will get two JSON strings:
              <ul className="pl-8">
                <li>The header and the payload.</li>
                <li>The signature.</li>
                <li>
                  The JOSE (JSON Object Signing and Encryption) header contains
                  the type of token — JWT in this case — and the signing
                  algorithm.
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          3. What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <ul className="pl-8">
            <li>
              JavaScript is a simple programming language that can be used with
              any browser that has the JavaScript Engine installed. Node. js, on
              the other hand, is an interpreter or execution environment for the
              JavaScript programming language.
            </li>
          </ul>
        </div>
      </div>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          4. How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <ul className="pl-8">
            <li>
              NodeJS receives multiple client requests and places them into
              EventQueue. NodeJS is built with the concept of event-driven
              architecture. NodeJS has its own EventLoop which is an infinite
              loop that receives requests and processes them.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blog;
