import { yupResolver } from '@hookform/resolvers/yup';

import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { Box, Button, ButtonBase, Container, Stack, Typography } from '@mui/material';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';

import PRODUCTS from '../_mock/products';
import Iconify from '../components/Iconify';

import { FormProvider, RHFTextField } from '../components/hook-form';
import Page from '../components/Page';
import GeneratedCode from '../sections/GeneratedCode';
import { ProductList } from '../sections/@dashboard/products';

export default function Projects() {
  const ProjectSchema = Yup.object().shape({
    projectName: Yup.string().required('Project Name is required'),
  });
  const [isCopy, setIsCopy] = useState(false);
  const [secretkey, setSecretkey] = useState('2312312csxcxzx1123');
  const defaultValues = {
    projectName: '',
  };
  const methods = useForm({
    resolver: yupResolver(ProjectSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    console.log(methods.getValues());
    /* Create new Project */
  };
  const params = useParams();

  return (
    <Page title="Projects">
      {console.log(params)}
      {!params.id ? (
        <Container>
          <Stack direction="row" justifyContent="space-between" mb={5}>
            <Typography variant="h4" gutterBottom>
              Projects
            </Typography>
          </Stack>
          <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={3} flexDirection="row" alignItems="baseline" gap={'10px'}>
              <Stack width={'80%'}>
                <RHFTextField name="projectName" label="Project Name" />
              </Stack>
              <Button
                style={{ textOverflow: 'none', width: '20%' }}
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Create Project
              </Button>
            </Stack>
          </FormProvider>
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: '10px',
              padding: '5px 10px',
              borderRadius: '10px',
              background: '#e8eef7',
            }}
          >
            <Typography variant="h6" style={{ fontWeight: '400', fontStyle: 'oblique' }}>
              Secret Key: {secretkey}
            </Typography>

            <CopyToClipboard
              text={secretkey}
              onCopy={() => {
                setIsCopy(true);
              }}
            >
              <ButtonBase>
                <Iconify icon={!isCopy ? 'akar-icons:clipboard' : 'subway:tick'} />
              </ButtonBase>
            </CopyToClipboard>
          </Box>
          <Box mt={10} />
          <ProductList products={PRODUCTS} />
        </Container>
      ) : (
        <Outlet />
      )}
    </Page>
  );
}
