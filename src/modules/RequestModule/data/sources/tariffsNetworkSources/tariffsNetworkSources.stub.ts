import { TariffListNetworkDTO } from './dto';

export const tariffsNetworkStubSources = {
  getTariffs: async (): Promise<TariffListNetworkDTO> => ({
    data: [{ id: '1', name: 'Tariff1', price: 2000, description: 'Tariff1' }],
    total: 1,
  }),
};
