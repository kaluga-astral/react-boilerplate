import { useMemo, useState } from 'react';

import { FormAutocomplete, FormAutocompleteProps } from '@example/shared';

import { useTariffsQuery } from '../../data';

import {
  TariffFormAutocompleteValue,
  createTariffAutocompleteStore,
} from './store';

export type TariffFormAutocompleteProps = Pick<
  FormAutocompleteProps<TariffFormAutocompleteValue>,
  'name' | 'control' | 'label'
>;

export const TariffFormAutocomplete = ({
  name,
  control,
  label,
}: TariffFormAutocompleteProps) => {
  const [{ getState }] = useState(createTariffAutocompleteStore);

  const query = useTariffsQuery();

  const { tariffs, isLoading } = useMemo(() => getState(query), [query]);

  return (
    <FormAutocomplete<TariffFormAutocompleteValue>
      name={name}
      control={control}
      label={label}
      options={tariffs}
      loading={isLoading}
      getOptionLabel={(option) => option?.name}
    />
  );
};
