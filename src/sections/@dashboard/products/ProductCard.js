import PropTypes from 'prop-types';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Button } from '@mui/material';

// utils

// components
import Iconify from '../../../components/Iconify';
import Label from '../../../components/Label';

ShopProductCard.propTypes = {
  product: PropTypes.object,
};

export default function ShopProductCard({ product }) {
  const { name, entries, status } = product;
  const navigate = useNavigate();
  return (
    <Card>
      <Box sx={{ pt: '20%', position: 'relative' }}>
        {status && (
          <Label
            variant="filled"
            color={(status === 'expired' && 'error') || 'info'}
            sx={{
              zIndex: 9,
              top: 16,
              right: 16,
              position: 'absolute',
              textTransform: 'uppercase',
            }}
          >
            {status}
          </Label>
        )}
      </Box>
      <Box sx={{ display: 'flex' }} justifyContent="space-between" alignItems={'center'}>
        <Stack sx={{ p: 3 }}>
          <Typography
            variant="h4"
            noWrap
            sx={{
              cursor: 'pointer',
              '&:hover': {
                textDecoration: 'underline',
              },
            }}
            onClick={() => {
              navigate(`/dashboard/projects/1`);
            }}
          >
            {name}
          </Typography>

          <Stack direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1">
              {entries}
              &nbsp; Entries
            </Typography>
          </Stack>
        </Stack>
        <Stack sx={{ p: 3 }}>
          <Button
            color="secondary"
            onClick={() => {
              // here goes the delete project function
            }}
          >
            <Iconify
              icon="fluent:delete-12-regular"
              sx={{
                fontSize: '24px',
                color: 'red',
              }}
            />
          </Button>
        </Stack>
      </Box>
    </Card>
  );
}
