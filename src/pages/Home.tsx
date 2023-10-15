import React, { useEffect, useState } from "react";
import axios from "axios";
import { SubjectAreas } from "./types/subjectareas";
import { Convert } from "./types/subjectareas";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { symbolName } from "typescript";

const Home = () => {
  const [subjectAreas, setSubjectAreas] = React.useState<SubjectAreas[] | null>(
    null
  );
  const navigate = useNavigate();

  const navigatetoAssessmentScreen = (param: string, param2: string) => {
    navigate(`/assessments/${param2}`);
  };

  useEffect(() => {
    const getAreas = async () => {
      const response = await axios.get("http://127.0.0.1:3001/api/v1/areas");
      const data = response.data["data"];
      const convertedData = Convert.toSubjectAreas(JSON.stringify(data));
      setSubjectAreas(convertedData);
      console.log(convertedData);
    };

    getAreas();
  }, []);

  return (
    <div className="w-screen px-10 py-4 mx-auto h-5/6 overflow-auto">
      <div className="w-11/12">
        <div className="sm:flex sm:items-center ">
          <div className="sm:flex-auto">
            <h1 className="mt-4 text-l font-semibold leading-6 text-gray-900 text-indigo-600">
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
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
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
                      {subject.score}
                    </td>
                    <td className="px-3 py-4 text-sm text-gray-500">
                      <a
                        onClick={() => {
                          navigatetoAssessmentScreen(
                            subject.name.replaceAll(" ", "").toLowerCase(),
                            subject.id
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
  );
};

export default Home;
