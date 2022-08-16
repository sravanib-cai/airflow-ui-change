import React from "react";
// import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

import type {
  Dag as DagType,
} from 'interfaces';
import { defaultDags } from 'api/defaults';
import { useDag, useDagCode, useDags } from 'api';
import useReactRouter from 'use-react-router';

interface RouterProps {
  match: { params: { dagId: DagType['dagId'] } }
  // match: { params: { fileToken: DagType['fileToken'] } }
}

const LIMIT1 = 1

export default function ReadFile() {
  const offset = 0;
  // const { match: { params: { fileToken } } }: RouterProps = useReactRouter();
  const { match: { params: { dagId } } }: RouterProps = useReactRouter();
  const {
    data: dag = {dagId:'', rootDagId:'', isPaused:false, isSubdag:false, fileloc:'', fileToken:'', owners:[]},
    isLoading,
    error,
  } = useDag(dagId);
  // console.log('Code, responseDataDags', dag, dag.fileToken);
  const responseCode = useDagCode(dag.fileToken);
  const showFile = ({ dag.fileloc }) => {
    { dag.fileloc }.preventDefault();
    const reader = new FileReader();
    reader.onload = ({ dag.fileloc }) => {
      const text = { dag.fileloc }.target.result;
      console.log(text);
    };
    reader.readAsText({ dag.fileloc }.target.files[0]);
  };

  if (!responseCode.error) {
    // console.log('successdata', responseCode.data);
    return (
      <div>
        <input type="file" onChange={showFile} />
      </div>
    )
  }else{
    // console.log('failureCode', responseCode.error);
    return (
      <h1>Failed to access pipeline code.</h1>
    )
  }
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   fetch("./example.py")
  //     .then((res) => res.text())
  //     .then((text) => setContent(text));
  // }, []);
};
