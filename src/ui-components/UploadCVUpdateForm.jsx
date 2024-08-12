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
export default function UploadCVUpdateForm(props) {
  const {
    id: idProp,
    uploadCV: uploadCVModelProp,
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
    Phone: "",
    Email: "",
    Birthday: "",
    Topic: "",
    Upload: [],
  };
  const [Name, setName] = React.useState(initialValues.Name);
  const [Sex, setSex] = React.useState(initialValues.Sex);
  const [Phone, setPhone] = React.useState(initialValues.Phone);
  const [Email, setEmail] = React.useState(initialValues.Email);
  const [Birthday, setBirthday] = React.useState(initialValues.Birthday);
  const [Topic, setTopic] = React.useState(initialValues.Topic);
  const [Upload, setUpload] = React.useState(initialValues.Upload);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = uploadCVRecord
      ? { ...initialValues, ...uploadCVRecord }
      : initialValues;
    setName(cleanValues.Name);
    setSex(cleanValues.Sex);
    setPhone(cleanValues.Phone);
    setEmail(cleanValues.Email);
    setBirthday(cleanValues.Birthday);
    setTopic(cleanValues.Topic);
    setUpload(cleanValues.Upload ?? []);
    setErrors({});
  };
  const [uploadCVRecord, setUploadCVRecord] = React.useState(uploadCVModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(UploadCV, idProp)
        : uploadCVModelProp;
      setUploadCVRecord(record);
    };
    queryData();
  }, [idProp, uploadCVModelProp]);
  React.useEffect(resetStateValues, [uploadCVRecord]);
  const validations = {
    Name: [{ type: "Required" }],
    Sex: [],
    Phone: [{ type: "Phone" }],
    Email: [{ type: "Required" }, { type: "Email" }],
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
          Phone,
          Email,
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
          await DataStore.save(
            UploadCV.copyOf(uploadCVRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "UploadCVUpdateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={Name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name: value,
              Sex,
              Phone,
              Email,
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
        defaultValue={Sex}
        onChange={(e) => {
          let value = e.target.value === "true";
          if (onChange) {
            const modelFields = {
              Name,
              Sex: value,
              Phone,
              Email,
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
              Phone: value,
              Email,
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
        label="Email"
        isRequired={true}
        isReadOnly={false}
        value={Email}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              Name,
              Sex,
              Phone,
              Email: value,
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
              Phone,
              Email,
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
              Phone,
              Email,
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
        {uploadCVRecord && (
          <StorageManager
            defaultFiles={uploadCVRecord.Upload.map((key) => ({ key }))}
            onUploadSuccess={({ key }) => {
              setUpload((prev) => {
                let value = [...prev, key];
                if (onChange) {
                  const modelFields = {
                    Name,
                    Sex,
                    Phone,
                    Email,
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
                    Phone,
                    Email,
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
            acceptedFileTypes={[]}
            isResumable={false}
            showThumbnails={true}
            maxSize={2000000}
            {...getOverrideProps(overrides, "Upload")}
          ></StorageManager>
        )}
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
            children="Upload"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || uploadCVModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
