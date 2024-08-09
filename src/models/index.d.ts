import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerCV = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CV, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Phone?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCV = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CV, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Name?: string | null;
  readonly Address?: string | null;
  readonly Phone?: string | null;
  readonly Email?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CV = LazyLoading extends LazyLoadingDisabled ? EagerCV : LazyCV

export declare const CV: (new (init: ModelInit<CV>) => CV) & {
  copyOf(source: CV, mutator: (draft: MutableModel<CV>) => MutableModel<CV> | void): CV;
}