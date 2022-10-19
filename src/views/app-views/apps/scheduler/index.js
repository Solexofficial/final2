import { DownloadOutlined } from '@ant-design/icons';
import { Button, Card, Col, Input, Row } from 'antd';
import { useEffect, useState } from 'react';
import { download, upload } from 'utils/fs';
import Field from './Field';
import SchedulerItemsList from './SchedulerItemsList';

const Scheduler = () => {
  const [items, setItems] = useState([]);

  const importItems = req => {
    setItems(
      req.keys().map((path, idx) => ({
        id: idx + 1,
        src: req(path).default,
        name: path.slice(2).replace(/\.[^/.]+$/, ''),
        pos: null,
        draggable: false,
      }))
    );
  };

  useEffect(() => {
    importItems(require.context('../../../../assets/img/scheduler/items', true, /\.png$/));
  }, []);

  const handleItemAdd = object => {
    if (!object.pos) {
      setItems(prevState =>
        prevState.map(item => (item.id === object.id ? { ...item, pos: { x: 0, y: 0 }, draggable: true } : item))
      );
    }
  };

  const handleItemDelete = object => {
    if (object.pos) {
      setItems(prevState =>
        prevState.map(item => (item.id === object.id ? { ...item, pos: null, draggable: false } : item))
      );
    }
  };

  const handleSetPosition = (id, pos) => {
    setItems(prevState => prevState.map(item => (item.id === id ? { ...item, pos } : item)));
  };

  const resetDraggableItems = () => {
    setItems(prevState => prevState.map(item => ({ ...item, pos: null, draggable: false })));
  };

  const handleSavePositions = () => {
    const positionsList = items.filter(item => item.draggable).map(item => ({ id: item.id, pos: item.pos }));
    download(positionsList, 'positions');
  };

  const handleUploadPositions = files => {
    const file = files.target.files[0];
    upload(file, setPositionFromFile);
  };

  const setPositionFromFile = data => {
    data.map(({ id, pos }) => {
      return setItems(prevState =>
        prevState.map(item => (item.id === id ? { ...item, pos: pos, draggable: true } : item))
      );
    });
  };

  return (
    <>
      <Row justify='end'>
        <Col span={24}>
          <Card bodyStyle={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button type='primary' icon={<DownloadOutlined />} onClick={() => handleSavePositions()}>
              Сохранить
            </Button>
            <label htmlFor='upload' className={'ant-btn ant-btn-primary'}>
              Загрузить
            </label>
            <Input
              style={{ display: 'none' }}
              name='upload'
              id='upload'
              type='file'
              onChange={handleUploadPositions}
            ></Input>
            <Button type='primary' onClick={resetDraggableItems}>
              Удалить все
            </Button>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col span={6}>
          <SchedulerItemsList items={items} onItemAdd={handleItemAdd} onItemDelete={handleItemDelete} />
        </Col>
        <Col span={18}>
          <Field draggableItemsList={items.filter(item => item.draggable)} onSetPosition={handleSetPosition} />
        </Col>
      </Row>
    </>
  );
};

export default Scheduler;
