/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, RadioGroupFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { UploadCV } from "../models";
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
export declare type UploadCVUpdateFormInputValues = {
    Name?: string;
    Sex?: boolean;
    Phone?: string;
    Email?: string;
    Birthday?: string;
    Topic?: string;
    Upload?: string[];
};
export declare type UploadCVUpdateFormValidationValues = {
    Name?: ValidationFunction<string>;
    Sex?: ValidationFunction<boolean>;
    Phone?: ValidationFunction<string>;
    Email?: ValidationFunction<string>;
    Birthday?: ValidationFunction<string>;
    Topic?: ValidationFunction<string>;
    Upload?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UploadCVUpdateFormOverridesProps = {
    UploadCVUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    Name?: PrimitiveOverrideProps<TextFieldProps>;
    Sex?: PrimitiveOverrideProps<RadioGroupFieldProps>;
    Phone?: PrimitiveOverrideProps<TextFieldProps>;
    Email?: PrimitiveOverrideProps<TextFieldProps>;
    Birthday?: PrimitiveOverrideProps<TextFieldProps>;
    Topic?: PrimitiveOverrideProps<TextFieldProps>;
    Upload?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type UploadCVUpdateFormProps = React.PropsWithChildren<{
    overrides?: UploadCVUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uploadCV?: UploadCV;
    onSubmit?: (fields: UploadCVUpdateFormInputValues) => UploadCVUpdateFormInputValues;
    onSuccess?: (fields: UploadCVUpdateFormInputValues) => void;
    onError?: (fields: UploadCVUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UploadCVUpdateFormInputValues) => UploadCVUpdateFormInputValues;
    onValidate?: UploadCVUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UploadCVUpdateForm(props: UploadCVUpdateFormProps): React.ReactElement;
