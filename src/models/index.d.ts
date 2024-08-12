import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerUploadCV = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploadCV, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Sex?: boolean | null;
  readonly Phone?: string | null;
  readonly Email: string;
  readonly Topic?: string | null;
  readonly Birthday?: string | null;
  readonly Upload?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUploadCV = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UploadCV, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name: string;
  readonly Sex?: boolean | null;
  readonly Phone?: string | null;
  readonly Email: string;
  readonly Topic?: string | null;
  readonly Birthday?: string | null;
  readonly Upload?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UploadCV = LazyLoading extends LazyLoadingDisabled ? EagerUploadCV : LazyUploadCV

export declare const UploadCV: (new (init: ModelInit<UploadCV>) => UploadCV) & {
  copyOf(source: UploadCV, mutator: (draft: MutableModel<UploadCV>) => MutableModel<UploadCV> | void): UploadCV;
}