import * as React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList } from 'react-window';
import './PhoneTable.css';
import {connect, useDispatch, useSelector} from 'react-redux';
import {fetchNumbers} from '../../redux/actions';

const renderRow = (props) => {
  const { style, data, index} = props;

  return (
    <ListItem style={style} key={props.data[index][0].id} component="div" disablePadding>
      <ListItemText primary={`${props.data[index][0].phoneNumber}`} />
    </ListItem>
  );
}

const VirtualizedList = ({syncNumber}) => {

  // React.useEffect(() => {
  //   dispatch(fetchNumbers())
  // }, [])

  // const dispatch = useDispatch();
  // syncNumber = useSelector(state => state.syncNumber.fetchedNumbers)
  // const loading = useSelector(state => state.app.loading)

  return (
    !syncNumber.length ? <p className="virtualizedlist__table-empty">Таблица пока пуста</p> :
    <Box className="phonetable"
      sx={{ width: '100%', height: 400, maxWidth: 360, bgcolor: 'background.paper' }}
      data={syncNumber}>
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={syncNumber.length}
        itemData={syncNumber}
        overscanCount={5}>
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    syncNumber: state.phoneNumbers.phoneNumbers
  }
}

connect(mapStateToProps, null)(renderRow)

export default connect(mapStateToProps, null)(VirtualizedList)
