import { CloseCircleOutlined } from '@ant-design/icons';
import { Button, List } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';

const SchedulerItemsList = ({ items, onItemAdd, onItemDelete }) => {
  return (
    <div
      id='scrollableDiv'
      style={{
        height: '672px',
        overflowY: 'auto',
      }}
    >
      <List
        itemLayout='vertical'
        dataSource={items}
        renderItem={item => (
          <List.Item onClick={() => onItemAdd(item)} style={{ cursor: `${item.draggable ? 'auto' : 'pointer'}` }}>
            <List.Item.Meta
              avatar={<Avatar shape={'square'} size={60} src={item.src} alt={item.name}></Avatar>}
              title={item.name}
              description={item.draggable ? `x:${item.pos.x} y:${item.pos.y}` : null}
            />
            {item.draggable && (
              <Button onClick={() => onItemDelete(item)} type='danger' icon={<CloseCircleOutlined />} />
            )}
          </List.Item>
        )}
      />
    </div>
  );
};

export default SchedulerItemsList;
