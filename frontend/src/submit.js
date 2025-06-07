// submit.js
import { useState } from "react";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";

export const SubmitButton = () => {
  const { nodes, edges } = useStore(
    (state) => ({ nodes: state.nodes, edges: state.edges }),
    shallow
  );

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [toastVisible, setToastVisible] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = async () => {
    if (nodes.length === 0 && edges.length === 0) {
      setToastVisible(
        "Data is empty! Please add some nodes and connect them with edges."
      );
      setTimeout(() => setToastVisible(false), 4000);
      return;
    }
    if (nodes.length > 0 && edges.length === 0) {
      setToastVisible(
        "This is not a valid pipeline! Please connect the nodes with edges."
      );
      setTimeout(() => setToastVisible(false), 4000);
      return;
    }
    if (nodes.length > 0 || edges.length > 0) {
      const payload = { nodes, edges };
      try {
        const response = await fetch("https://nodify-1.onrender.com/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const responseData = await response.json();
        setData(responseData?.data);
        setSuccess(true);
        setError("");
        handleOpen();
      } catch (error) {
        console.error("Fetch error:", error);
        setSuccess(false);
        setError("Fetch error: " + error.message);
        handleOpen();
      }
    } else {
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    }
  };

  return (
    <div className="flex items-center justify-center relative">
      <div
        onClick={handleSubmit}
        className="mt-8 cursor-pointer px-6 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out"
      >
        Submit
      </div>

      {toastVisible && (
        <div className="fixed bottom-6 right-6 bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4 rounded shadow-md z-50">
          <p>{toastVisible}</p>
        </div>
      )}

      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white w-[90%] max-w-xl p-6 rounded-xl border border-black shadow-xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold text-center mb-4">
              Information regarding Pipeline
            </h2>
            <div className="space-y-4">
              {success ? (
                <>
                  <p className="text-gray-800">
                    Number of Nodes:{" "}
                    <span className="font-semibold text-black">
                      {data?.num_nodes || 0}
                    </span>
                  </p>
                  <p className="text-gray-800">
                    Number of Edges:{" "}
                    <span className="font-semibold text-black">
                      {data?.num_edges || 0}
                    </span>
                  </p>
                  {data?.is_dag && (
                    <div className="bg-white text-blue-800 px-4 py-2 rounded-lg">
                      <span className="font-semibold">
                      This is DAG pipeline.
                      </span>
                    </div>
                  )}
                  {!data?.is_dag && (
                    <div className="bg-white text-red-800 px-4 py-2 rounded-lg">
                      <span className="font-semibold">
                      This is NOT DAG pipeline.
                      </span>
                    </div>
                  )}
                </>
              ) : (
                <div className="bg-red-100 text-red-800 px-4 py-2 rounded-lg">
                  {error}
                </div>
              )}
            </div>
            <button
              onClick={handleClose}
              className="mt-6 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition block mx-auto"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
