import React from 'react';

const CustomerReviews = () => {
  const reviews = [
    {
      id: 1,
      text: "Joshua works hard to ensure that you understand the material. I have been able to learn greatly under his guidance in advanced topics such as Calculus."
    },
    {
      id: 2,
      text: "Joshua is like the physics god and without him I would have been failing AP physics. His tutoring has taught me concepts that I have been struggling with and I am thankful that he takes his time to teach us and help us pass the class"
    },
    {
      id: 3,
      text: "Joshua is articulate and has a thorough understanding of material."
    },
    {
      id: 4,
      text: "Josh has been able to help me understand concepts in physics that i had previously been completely lost on. He goes out of his way to help ensure that not only me, but our entire class understands the topics."
    },
    {
      id: 5,
      text: "Joshua has thoroughly explained each aspect of what I was struggling on. His teaching really helped me do better on my tests."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 via-emerald-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            What Students Say
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Feedback from students who have experienced Josh&apos;s tutoring services
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-4">
                  <p className="text-gray-700 leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;