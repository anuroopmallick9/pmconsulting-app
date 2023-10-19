import React, { Fragment, useContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Assessments, Convert } from "./types/assessments";
import EditableRow from "../components/EditableRow";
import ReadOnlyRow from "../components/ReadOnlyRow";

const Assessment = () => {
  const params = useParams();
  const [assessment, setAssessment] = React.useState<Assessments[] | null>(
    null
  );
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [editAssessmentId, seteditAssessmentId] = React.useState<
    string | null
  >();
  const [editQuestionId, seteditQuestionId] = React.useState<number | null>();
  const [EditFormData, setEditFormData] = React.useState({
    response: "",
    tools: "",
    document: "",
    rating: "",
  });

  useEffect(() => {
    getAssessments();
  }, []);

  const getTotalMaturityRating = () => {
    let totalMaturityScore = 0;
    assessment?.forEach((section) => {
      section.assessments.forEach((maturityRating) => {
        totalMaturityScore += maturityRating.rating;
      });
    });
    return totalMaturityScore;
  };

  const getAssessments = async () => {
    try {
      const response = await axios.get(
        `http://127.0.0.1:3001/api/v1/assessment/${params.id}`
      );
      const data = response.data["data"];
      const convertedData = Convert.toAssessments(JSON.stringify(data));
      setAssessment(convertedData);
      setLoading(false);
      setError(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  const editAssessment = async (assessmentid: string, questionid: number) => {
    seteditAssessmentId(null);
    seteditQuestionId(null);
    try {
      await axios.put(
        `http://127.0.0.1:3001/api/v1/assessment/${assessmentid}/${questionid}`,
        {
          response: EditFormData.response,
          tools: EditFormData.tools,
          document: EditFormData.document,
          rating: parseInt(EditFormData.rating),
        }
      );

      getAssessments();
    } catch (error) {
      console.log("Error occured while updating data");
    }
  };

  const handleEditFormChange = (event: {
    preventDefault: () => void;
    target: { getAttribute: (arg0: string) => any; value: any };
  }) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    setEditFormData((prevData) => ({
      ...prevData,
      [fieldName as string]: fieldValue,
    }));
  };

  function handleEditClick(
    event: { preventDefault: () => void },
    id: string,
    questionId: number,
    assessment: any
  ) {
    event.preventDefault();
    seteditAssessmentId(id);
    seteditQuestionId(questionId);

    const formValues = {
      response: assessment.response,
      tools: assessment.tools,
      document: assessment.documents,
      rating: assessment.rating,
    };

    setEditFormData(formValues);
  }

  // const handleEditFormSubmit = (event: { preventDefault: () => void }) => {
  //   event.preventDefault();

  // };

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p>Error Occure While Fetchig Data</p>}
      {!loading && !error && assessment && (
        <div className="w-5/6 h-5/6 overflow-auto mt-10 sm:px-6 lg:px-8">
          <div className="ml-3 sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="flex justify-between text-l text-base font-semibold leading-6 text-gray-900">
                <span className="text-2xl">{params.subJectName}</span>{" "}
                <span>
                  Average Maturity Rating - {getTotalMaturityRating()}
                </span>
              </h1>
            </div>
          </div>
          <form>
            <div className="flow-root">
              <div className="">
                <div className=" inline-block min-w-full py-2 align-middle">
                  <div className="bg-green ">
                    <table className="min-w-full border-separate border-spacing-0">
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
                            Response
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
                            className="sticky top-0 z-10 border-b border-gray-300 bg-white bg-opacity-75 py-3.5 pl-3 pr-4 backdrop-blur backdrop-filter sm:pr-6 lg:pr-8"
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
                            {rows.assessments.map((row, index) => (
                              <Fragment>
                                {editAssessmentId === rows.id &&
                                editQuestionId === row.questionId ? (
                                  <EditableRow
                                    row={row}
                                    editFormData={EditFormData}
                                    id={rows.id}
                                    handleEditFormChange={handleEditFormChange}
                                    classNames={classNames(
                                      index === 0
                                        ? "border-gray-300"
                                        : "border-gray-200",
                                      "border-t"
                                    )}
                                    editAssessment={editAssessment}
                                  ></EditableRow>
                                ) : (
                                  <ReadOnlyRow
                                    row={row}
                                    classNames={classNames(
                                      index === 0
                                        ? "border-gray-300"
                                        : "border-gray-200",
                                      "border-t"
                                    )}
                                    handleEditClick={handleEditClick}
                                    id={rows.id}
                                  ></ReadOnlyRow>
                                )}
                              </Fragment>
                            ))}
                          </Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default Assessment;
