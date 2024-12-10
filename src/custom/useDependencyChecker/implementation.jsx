import { useEffect, useState } from "react";
import { useDependencyChecker } from "./useDependencyChecker";

const projectsInitialState = [
  {
    id: 101,
    name: "Project Alpha",
    deadline: new Date(2024, 11, 31),
    tasks: [
      { id: 1001, title: "Task A", completed: false },
      { id: 1002, title: "Task B", completed: true },
    ],
  },
  {
    id: 102,
    name: "Project Beta",
    deadline: new Date(2025, 0, 15),
    tasks: [
      { id: 2001, title: "Task X", completed: false },
      { id: 2002, title: "Task Y", completed: false },
    ],
  },
];

const preferencesInitialState = {
  preferences: {
    theme: "dark",
    notifications: {
      email: true,
      sms: false,
      push: {
        enabled: true,
        frequency: "daily",
      },
    },
  },
  roles: ["admin", "editor", "viewer"],
};

const basicInfoInitialState = {
  id: 1,
  name: "John Smith",
  isActive: true,
  contact: {
    email: "john.smith@example.com",
    phone: "+1-123-456-7890",
    address: "some place",
  },
};

export default function DependencyCheckerTestComponent() {

  const [projects, setProjects] = useState(projectsInitialState);
  const [preferences, setPreferences] = useState(preferencesInitialState);
  const [basicInfo, setBasicInfo] = useState(basicInfoInitialState);

  const [dependencyChange, setDependencyChange] = useState(0);
  const [normalDependencyChange, setNormalDependencyChange] = useState(0);

  const [
    projectsChecker,
    preferencesChecker,
    basicInfoChecker
  ] = useDependencyChecker([ projects, preferences, basicInfo ]);

  useEffect(() => {
    setDependencyChange(prev => prev + 1);
  }, [
    projectsChecker(projects), 
    preferencesChecker(preferences),
    basicInfoChecker(basicInfo)
    // Detect actual value changes in dependencies
    // instead of compare memory positions like '{} === {}' or '[] === []'
  ]);

  useEffect(() => {
    setNormalDependencyChange(prev => prev + 1);
  }, [
    projects,
    preferences,
    basicInfo,
    // in a basic dependency check, React compares dependencies using a simple strict equality comparison '==='
    // in this case the dependencies will be check like this: ({} === {} and [] === [])
    // Triggering the useEffect on every setState execution, even though the state value hasn't changed.
  ]);

  const changeProject = () => {
    // change second index of array to null
    setProjects([projectsInitialState[0], null]);
  }

  const changePreferences = () => {
    // new object instance, same values
    setPreferences({...preferencesInitialState});
  }

  const changeBasicInfo = (toggle) => {
    // toggle initialState <-> undefined
    setBasicInfo(() => {
      return toggle ? ({...basicInfoInitialState}) : undefined;
    });
  }

  return (
    <div>
      <p>changes with useDependencyChecker hook dependencies: { dependencyChange }</p>
      <p>changes with normal dependencies: { normalDependencyChange }</p>

      <div className="basicFlex w-650">
        <label>
          (changes of value) <br />
          this change the value of index 1 in project array to null
          <button onClick={changeProject}>
            change project state 
          </button>
        </label>

        <label>
          (doesn't change the value) <br />
          this don't change the value of preference but creates a new object
          <button onClick={changePreferences}>
            change preference state
          </button>
        </label>
      </div>
      

      <div className="basicFlex w-650">
        <label>
          set basic info to the initialState value in a new object
          <button onClick={() => changeBasicInfo(true)}>
            toggle new object
          </button>
        </label>

        <label>
          this change the value of index 1 in project array to null
          <button onClick={() => changeBasicInfo(false)}>
          toggle to undefined
          </button>
        </label><br/>
      </div>

    </div>
  )
}
