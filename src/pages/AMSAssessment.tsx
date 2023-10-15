import React, { Fragment, useState } from "react";
import amsassessment from "./../data/amsassessment.json";
import { Table } from "../components/Table";

const AMSAssessment = () => {
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="w-5/6 mt-10 sm:px-6 lg:px-8">
        <div className="ml-3 sm:flex sm:items-center">
          <div className="sm:flex-auto">
            <h1 className="text-l text-base font-semibold leading-6 text-gray-900 text-indigo-900">
              AMS Assessment
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
                    {/* <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-3">
                    <span className="sr-only">Edit</span>
                  </th> */}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {amsassessment.map((row) => (
                    <Fragment key={row.section}>
                      <tr className="border-t border-gray-200">
                        <th
                          colSpan={5}
                          scope="colgroup"
                          className="bg-gray-50 py-2 pl-4 pr-3 text-left text-indigo-600 text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          {row.section}
                        </th>
                      </tr>
                      {row.assessments.map((row, personIdx) => (
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
                              value={row.response}
                              rows={3}
                            ></textarea>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <textarea
                              className="border border-1 border-slate-800 rounded-sm"
                              value={row.tools}
                              rows={2}
                            ></textarea>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <textarea
                              className="border border-1 border-slate-800 rounded-sm"
                              value={row.document}
                              rows={2}
                            ></textarea>
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <select className="border border-1 border-slate-800 rounded-sm w-20 p-1 rounded-md">
                              <option value={1}>Select</option>
                              <option value={1}>1</option>
                              <option value={2}>2</option>
                              <option value={3}>3</option>
                              <option value={4}>4</option>
                              <option value={5}>5</option>
                            </select>
                          </td>
                          {/* <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                          <a
                            href="#"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Edit
                            <span className="sr-only">, {row.question}</span>
                          </a>
                        </td> */}
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
    </>
  );
};

export default AMSAssessment;
