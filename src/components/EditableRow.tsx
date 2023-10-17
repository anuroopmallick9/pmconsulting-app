import React from "react";

const EditableRow = ({
  row,
  classNames,
  editFormData,
  id,
  editAssessment,
  handleEditFormChange,
}: {
  row: any;
  classNames: any;
  editFormData: any;
  id: string;
  editAssessment: (assessmentid: string, questionid: number) => Promise<void>;
  handleEditFormChange: (event: {
    preventDefault: () => void;
    target: {
      getAttribute: (arg0: string) => any;
      value: any;
    };
  }) => void;
}) => {
  return (
    <tr key={row.question} className={classNames}>
      <td className=" py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3 w-96 text-justify">
        {row.question}
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <textarea
          className="border border-1 border-slate-800 rounded-sm "
          name="response"
          placeholder="Enter response..."
          rows={3}
          cols={40}
          value={editFormData.response}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <textarea
          className="border border-1 border-slate-800 rounded-sm"
          name="tools"
          placeholder="Enter tools used..."
          rows={3}
          value={editFormData.tools}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <textarea
          className="border border-1 border-slate-800 rounded-sm"
          name="document"
          placeholder="Enter documents used..."
          rows={3}
          value={editFormData.documents}
          onChange={handleEditFormChange}
        ></textarea>
      </td>
      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
        <select
          onChange={handleEditFormChange}
          value={editFormData.rating}
          name="rating"
          className="border border-1 border-slate-800 rounded-sm w-20 p-1 rounded-md"
        >
          <option value={0}>Select</option>
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
            editAssessment(id, row.questionId);
          }}
        >
          Save
          <span className="sr-only"></span>
        </a>
      </td>
    </tr>
  );
};

export default EditableRow;
