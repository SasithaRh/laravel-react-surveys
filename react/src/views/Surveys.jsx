import {Link} from "react-router-dom";
import PageComponent from "../components/PageComponent";
import { useStateContext } from "../contexts/ContextProvider";
import SurveyListItem from "../components/SurveyListItem";
const Dashboard = () => {

    const {surveys} = useStateContext();
    console.log(surveys)
    const onDeleteClick = (id) => {
        if (window.confirm("Are you sure you want to delete this survey?")) {
          axiosClient.delete(`/survey/${id}`).then(() => {
            getSurveys();
            showToast('The survey was deleted');
          });
        }
      };
  return (


    <>
        <PageComponent title="Surveys">


        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {surveys.map((survey) => (
              <SurveyListItem
                survey={survey}
                key={survey.id}
                onDeleteClick={onDeleteClick}
              />
            ))}
          </div>

      </PageComponent>
    </>
  )
}

export default Dashboard
