import React, { Fragment, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Assessments, Convert } from "./types/assessments";
import { request } from "https";
import { UpdateAssessment } from "./types/updateassessment";

const Assessment = () => {
  const assessmentid = useParams();
  const [assessment, setAssessment] = React.useState<Assessments[] | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [UpdateAssessment, setUpdateAssessment] =
    React.useState<UpdateAssessment>();
  const [response, setResponse] = React.useState("");
  const [tools, setTools] = React.useState("");
  const [documents, setDocuments] = React.useState("");
  const [maturityRating, setMaturityRating] = React.useState<number>();

  useEffect(() => {
    getAssessments();
  }, []);

  const getAssessments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3001/api/v1/assessment/${assessmentid.id}`
      );
      const data = response.data["data"];
      const convertedData = Convert.toAssessments(JSON.stringify(data));
      setAssessment(convertedData);
      console.log("data" + JSON.stringify(convertedData));
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const editAssessment = async (assessmentid: string, questionid: number) => {
    try {
      await axios.put(
        `http://127.0.0.1:3001/api/v1/assessment/${assessmentid}/${questionid}`,
        {
          response: `${response}`,
          tools: `${tools}`,
          document: `${documents}`,
          rating: maturityRating,
        }
      );
    } catch (error) {
      console.log("Error occured while updating data");
    }
  };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error Occure While Fetchig Data</p>}
      {!loading && !error && assessment && (
        <div className="w-5/6 mt-10 sm:px-6 lg:px-8">
          <div className="ml-3 sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-l text-base font-semibold leading-6 text-gray-900 text-indigo-900">
                Assessment
              </h1>
            </div>
          </div>
          <div className="flow-root h-5/6 overflow-y-scroll">
            <div className="">
              <div className=" inline-block min-w-full py-2 align-middle ">
                <table className="min-w-full">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3 sticky top-0 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"
                      >
                        Evaluation & Assessment
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"
                      >
                        Response from Aspire
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"
                      >
                        Tools Used
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"
                      >
                        Templates & Documents
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sticky top-0 border-b border-gray-300 bg-white bg-opacity-75 backdrop-blur backdrop-filter"
                      >
                        Maturity Rating
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {assessment?.map((rows) => (
                      <Fragment key={rows.section}>
                        <tr className="border-t border-gray-200">
                          <th
                            colSpan={5}
                            scope="colgroup"
                            className="bg-gray-50 py-2 pl-4 pr-3 text-left text-indigo-600 text-sm font-semibold text-gray-900 sm:pl-3"
                          >
                            {rows.section}
                          </th>
                        </tr>
                        {rows.assessments.map((row, personIdx) => (
                          <tr
                            key={row.question}
                            className={classNames(
                              personIdx === 0
                                ? "border-gray-300"
                                : "border-gray-200",
                              "border-t"
                            )}
                          >
                            <td className=" py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                              {row.question}
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <textarea
                                className="border border-1 border-slate-800 rounded-sm "
                                defaultValue={row.response}
                                rows={3}
                                onChange={(e) => {
                                  setResponse(e.target.value);
                                }}
                              ></textarea>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <textarea
                                className="border border-1 border-slate-800 rounded-sm"
                                defaultValue={row.tools}
                                rows={2}
                                onChange={(e) => {
                                  setTools(e.target.value);
                                }}
                              ></textarea>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <textarea
                                className="border border-1 border-slate-800 rounded-sm"
                                defaultValue={row.document}
                                rows={2}
                                onChange={(e) => {
                                  setDocuments(e.target.value);
                                }}
                              ></textarea>
                            </td>
                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                              <select
                                defaultValue={row.rating}
                                onChange={(e) => {
                                  setMaturityRating(parseInt(e.target.value));
                                }}
                                className="border border-1 border-slate-800 rounded-sm w-20 p-1 rounded-md"
                              >
                                <option value={1}>Select</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                              </select>
                            </td>
                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                              <a
                                href="#"
                                className="text-indigo-600 hover:text-indigo-900"
                                onClick={() => {
                                  editAssessment(rows.id, row.questionId);
                                }}
                              >
                                Save
                                <span className="sr-only"></span>
                              </a>
                            </td>
                          </tr>
                        ))}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Assessment;
