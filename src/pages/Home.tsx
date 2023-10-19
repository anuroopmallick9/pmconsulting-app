import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { SubjectAreas } from "./types/subjectareas";
import { Convert } from "./types/subjectareas";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [subjectAreas, setSubjectAreas] = React.useState<SubjectAreas[] | null>(
    null
  );
  const [error, setError] = useState(false);
  const [loading, setLoading] = React.useState(true);
  const [assessmentName, setAssessmentName] = React.useState("");
  const navigate = useNavigate();

  const navigatetoAssessmentScreen = (id: string, subjectName: string) => {
    const paramsMap = new Map<string, string>([
      ["id", id],
      ["subJectName", subjectName],
    ]);
    navigate(`/assessments/${id}/${subjectName}`);
  };

  useEffect(() => {
    const getAreas = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:3001/api/v1/areas");
        const data = response.data["data"];
        const convertedData = Convert.toSubjectAreas(JSON.stringify(data));
        setSubjectAreas(convertedData);
        setLoading(false);
        setError(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };

    getAreas();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error Occure While Fetchig Data</p>}
      {!loading && subjectAreas && (
        <div className="w-screen mt-10  px-10 py-4 mx-auto h-5/6 overflow-auto">
          <div className="w-11/12">
            <div className="sm:flex sm:items-center ">
              <div className="sm:flex-auto">
                <h1 className="text-2xl font-semibold leading-6 text-gray-900 ">
                  Maturity Assessment Handbook
                </h1>
              </div>
            </div>
            <div className="-mx-4 mt-8 sm:-mx-0 ">
              <table className="min-w-full divide-y divide-gray-300 ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-0"
                    >
                      Sr.No
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
                    >
                      Subject Areas
                    </th>
                    <th
                      scope="col"
                      className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 sm:table-cell"
                    >
                      Assessment Status
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                    >
                      Assessment Score
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-0"
                    >
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {subjectAreas &&
                    subjectAreas.map((subject, index) => (
                      <tr key={subject.id}>
                        <td className="w-full max-w-0 py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none sm:pl-0">
                          {(index += 1)}
                          <dl className="font-normal lg:hidden">
                            <dt className="sr-only">Title</dt>
                            <dd className="mt-1 truncate text-gray-700">
                              {subject.name}
                            </dd>
                            <dt className="sr-only sm:hidden">Email</dt>
                            <dd className="mt-1 truncate text-gray-500 sm:hidden">
                              {subject.score}
                            </dd>
                          </dl>
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-gray-500 lg:table-cell">
                          {subject.name}
                        </td>
                        <td className="hidden px-3 py-4 text-sm text-gray-500 sm:table-cell">
                          {subject.status}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          {subject.score == -1 ? "" : subject.score}
                        </td>
                        <td className="px-3 py-4 text-sm text-gray-500">
                          <a
                            onClick={() => {
                              navigatetoAssessmentScreen(
                                subject.id,
                                subject.name
                              );
                            }}
                            className="cursor-pointer text-indigo-600 font-bold"
                          >
                            View
                          </a>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
