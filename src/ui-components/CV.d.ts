/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type CVInputValues = {
    Field0?: string;
    Field1?: string;
    Field2?: string;
    Field3?: string;
    Field4?: string;
};
export declare type CVValidationValues = {
    Field0?: ValidationFunction<string>;
    Field1?: ValidationFunction<string>;
    Field2?: ValidationFunction<string>;
    Field3?: ValidationFunction<string>;
    Field4?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CVOverridesProps = {
    CVGrid?: PrimitiveOverrideProps<GridProps>;
    Field0?: PrimitiveOverrideProps<TextFieldProps>;
    Field1?: PrimitiveOverrideProps<TextFieldProps>;
    Field2?: PrimitiveOverrideProps<TextFieldProps>;
    Field3?: PrimitiveOverrideProps<TextFieldProps>;
    Field4?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type CVProps = React.PropsWithChildren<{
    overrides?: CVOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CVInputValues) => CVInputValues;
    onSuccess?: (fields: CVInputValues) => void;
    onError?: (fields: CVInputValues, errorMessage: string) => void;
    onChange?: (fields: CVInputValues) => CVInputValues;
    onValidate?: CVValidationValues;
} & React.CSSProperties>;
export default function CV(props: CVProps): React.ReactElement;
