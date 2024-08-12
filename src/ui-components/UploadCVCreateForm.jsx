/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  Radio,
  RadioGroupField,
  TextField,
} from "@aws-amplify/ui-react";
import { StorageManager } from "@aws-amplify/ui-react-storage";
import { UploadCV } from "../models";
import {
  fetchByPath,
  getOverrideProps,
  processFile,
  validateField,
} from "./utils";
import { Field } from "@aws-amplify/ui-react/internal";
import { DataStore } from "aws-amplify/datastore";
export default function UploadCVCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    Name: "",
    Sex: undefined,
    Email: "",
    Phone: "",
    Birthday: "",
    Topic: "",
    Upload: [],
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Sex, setSex] = React.useState(initialValues.Sex);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Birthday, setBirthday] = React.useState(initialValues.Birthday);
  const [Topic, setTopic] = React.useState(initialValues.Topic);
  const [Upload, setUpload] = React.useState(initialValues.Upload);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.Name);
    setSex(initialValues.Sex);
    setEmail(initialValues.Email);
    setPhone(initialValues.Phone);
    setBirthday(initialValues.Birthday);
    setTopic(initialValues.Topic);
    setUpload(initialValues.Upload);
    setErrors({});
  };
  const validations = {
    Name: [{ type: "Required" }],
    Sex: [],
    Email: [{ type: "Required" }, { type: "Email" }],
    Phone: [{ type: "Phone" }],
    Birthday: [],
    Topic: [],
    Upload: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          Name,
          Sex,
          Email,
          Phone,
          Birthday,
          Topic,
          Upload,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await DataStore.save(new UploadCV(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UploadCVCreateForm")}
      {...rest}
    >
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Name</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Sex,
              Email,
              Phone,
              Birthday,
              Topic,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Name ?? value;
          }
          if (errors.Name?.hasError) {
            runValidationTasks("Name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("Name", Name)}
        errorMessage={errors.Name?.errorMessage}
        hasError={errors.Name?.hasError}
        {...getOverrideProps(overrides, "Name")}
      ></TextField>
      <RadioGroupField
        label="Sex"
        name="Sex"
        isReadOnly={false}
        isRequired={false}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              Name,
              Sex: value,
              Email,
              Phone,
              Birthday,
              Topic,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Sex ?? value;
          }
          if (errors.Sex?.hasError) {
            runValidationTasks("Sex", value);
          }
          setSex(value);
        }}
        onBlur={() => runValidationTasks("Sex", Sex)}
        errorMessage={errors.Sex?.errorMessage}
        hasError={errors.Sex?.hasError}
        {...getOverrideProps(overrides, "Sex")}
      >
        <Radio
          children="Man"
          value="true"
          {...getOverrideProps(overrides, "SexRadio0")}
        ></Radio>
        <Radio
          children="Women"
          value="false"
          {...getOverrideProps(overrides, "SexRadio1")}
        ></Radio>
      </RadioGroupField>
      <TextField
        label={
          <span style={{ display: "inline-flex" }}>
            <span>Email</span>
            <span style={{ color: "red" }}>*</span>
          </span>
        }
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Sex,
              Email: value,
              Phone,
              Birthday,
              Topic,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Email ?? value;
          }
          if (errors.Email?.hasError) {
            runValidationTasks("Email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("Email", Email)}
        errorMessage={errors.Email?.errorMessage}
        hasError={errors.Email?.hasError}
        {...getOverrideProps(overrides, "Email")}
      ></TextField>
      <TextField
        label="Phone"
        isRequired={false}
        isReadOnly={false}
        type="tel"
        value={Phone}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Sex,
              Email,
              Phone: value,
              Birthday,
              Topic,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Phone ?? value;
          }
          if (errors.Phone?.hasError) {
            runValidationTasks("Phone", value);
          }
          setPhone(value);
        }}
        onBlur={() => runValidationTasks("Phone", Phone)}
        errorMessage={errors.Phone?.errorMessage}
        hasError={errors.Phone?.hasError}
        {...getOverrideProps(overrides, "Phone")}
      ></TextField>
      <TextField
        label="Birthday"
        isRequired={false}
        isReadOnly={false}
        type="date"
        value={Birthday}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Sex,
              Email,
              Phone,
              Birthday: value,
              Topic,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Birthday ?? value;
          }
          if (errors.Birthday?.hasError) {
            runValidationTasks("Birthday", value);
          }
          setBirthday(value);
        }}
        onBlur={() => runValidationTasks("Birthday", Birthday)}
        errorMessage={errors.Birthday?.errorMessage}
        hasError={errors.Birthday?.hasError}
        {...getOverrideProps(overrides, "Birthday")}
      ></TextField>
      <TextField
        label="Topic"
        isRequired={false}
        isReadOnly={false}
        value={Topic}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Sex,
              Email,
              Phone,
              Birthday,
              Topic: value,
              Upload,
            };
            const result = onChange(modelFields);
            value = result?.Topic ?? value;
          }
          if (errors.Topic?.hasError) {
            runValidationTasks("Topic", value);
          }
          setTopic(value);
        }}
        onBlur={() => runValidationTasks("Topic", Topic)}
        errorMessage={errors.Topic?.errorMessage}
        hasError={errors.Topic?.hasError}
        {...getOverrideProps(overrides, "Topic")}
      ></TextField>
      <Field
        errorMessage={errors.Upload?.errorMessage}
        hasError={errors.Upload?.hasError}
        label={"Upload"}
        isRequired={false}
        isReadOnly={false}
      >
        <StorageManager
          onUploadSuccess={({ key }) => {
            setUpload((prev) => {
              let value = [...prev, key];
              if (onChange) {
                const modelFields = {
                  Name,
                  Sex,
                  Email,
                  Phone,
                  Birthday,
                  Topic,
                  Upload: value,
                };
                const result = onChange(modelFields);
                value = result?.Upload ?? value;
              }
              return value;
            });
          }}
          onFileRemove={({ key }) => {
            setUpload((prev) => {
              let value = prev.filter((f) => f !== key);
              if (onChange) {
                const modelFields = {
                  Name,
                  Sex,
                  Email,
                  Phone,
                  Birthday,
                  Topic,
                  Upload: value,
                };
                const result = onChange(modelFields);
                value = result?.Upload ?? value;
              }
              return value;
            });
          }}
          processFile={processFile}
          accessLevel={"public"}
          acceptedFileTypes={["video/*", "image/*"]}
          isResumable={false}
          showThumbnails={true}
          maxFileCount={1}
          maxSize={2000000}
          {...getOverrideProps(overrides, "Upload")}
        ></StorageManager>
      </Field>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Upload your CV"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
