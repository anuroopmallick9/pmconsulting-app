import React from "react";

const ReadOnlyRow = ({
  row,
  classNames,
  id,
  handleEditClick,
}: {
  row: any;
  classNames: any;
  id: string;
  handleEditClick: (
    event: { preventDefault: () => void },
    id: string,
    questionId: number,
    assessment: any
  ) => void;
}) => {
  return (
    <tr key={row.question} className={classNames}>
      <td className=" py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 w-96 text-justify">
        {row.question}
      </td>
      <td className="w-80 whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {row.response}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {row.tools}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {row.document}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        {row.rating}
      </td>
      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
        <a
          href="#"
          className="text-indigo-600 hover:text-indigo-900"
          onClick={(event) => {
            handleEditClick(event, id, row.questionId, row);
          }}
        >
          Edit
          <span className="sr-only"></span>
        </a>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
