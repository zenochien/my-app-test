/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UploadCVCreateFormInputValues = {
    Name?: string;
    Sex?: boolean;
    Email?: string;
    Phone?: string;
    Birthday?: string;
    Topic?: string;
    Upload?: string[];
};
export declare type UploadCVCreateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Sex?: ValidationFunction<boolean>;
    Email?: ValidationFunction<string>;
    Phone?: ValidationFunction<string>;
    Birthday?: ValidationFunction<string>;
    Topic?: ValidationFunction<string>;
    Upload?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadCVCreateFormOverridesProps = {
    UploadCVCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Sex?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Birthday?: PrimitiveOverrideProps<TextFieldProps>;
    Topic?: PrimitiveOverrideProps<TextFieldProps>;
    Upload?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type UploadCVCreateFormProps = React.PropsWithChildren<{
    overrides?: UploadCVCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: UploadCVCreateFormInputValues) => UploadCVCreateFormInputValues;
    onSuccess?: (fields: UploadCVCreateFormInputValues) => void;
    onError?: (fields: UploadCVCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploadCVCreateFormInputValues) => UploadCVCreateFormInputValues;
    onValidate?: UploadCVCreateFormValidationValues;
} & React.CSSProperties>;
export default function UploadCVCreateForm(props: UploadCVCreateFormProps): React.ReactElement;
